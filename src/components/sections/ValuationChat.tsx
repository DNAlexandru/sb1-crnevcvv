import { useState } from 'react';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

type MessageContent =
  | { type: 'text'; text: string }
  | { type: 'image_url'; image_url: { url: string } };

type Message = {
  role: string;
  content: MessageContent[];
};

const ValuationChat: React.FC = () => {
  const { t } = useLanguage();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: [
        {
          type: 'text',
          text: t(
            'valuation.system',
            'Sei un assistente esperto in valutazioni. Chiedi dati integrativi se necessario e poi genera un report sul valore intrinseco del bene o servizio indicato, basandoti sul testo e sull’immagine se presente.'
          ),
        },
      ],
    },
  ]);

  const handleSubmit = async () => {
    await sendToChatGPT(description, image, messages, setMessages, setResponse, setLoading);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow p-6">
        <textarea
          className="w-full border border-navy-200 rounded p-2 mb-4 text-sm"
          rows={3}
          placeholder={t('valuation.promptPlaceholder', 'Descrivi il bene o servizio da valutare')}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <Button variant="primary" size="lg" onClick={handleSubmit} disabled={loading}>
          {loading ? t('valuation.loading', 'Valutazione...') : t('valuation.button', 'Valuta')}
        </Button>
        {response && (
          <div className="mt-4 text-left whitespace-pre-wrap text-sm">{response}</div>
        )}
      </div>
    </div>
  );
};

export default ValuationChat;

// eslint-disable-next-line react-refresh/only-export-components
export async function sendToChatGPT(
  description: string,
  image: File | null,
  messages: Message[],
  setMessages: (msgs: Message[]) => void,
  setResponse: (res: string) => void,
  setLoading: (val: boolean) => void
) {
  const API_KEY = 'INSERISCI_LA_TUA_API_KEY';
  setLoading(true);

  const userContent: MessageContent[] = [{ type: 'text', text: description }];
  if (image) {
    const base64 = await fileToBase64(image);
    userContent.push({ type: 'image_url', image_url: { url: base64 } });
  }

  const updatedMessages = [...messages, { role: 'user', content: userContent }];

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-vision-preview',
        messages: updatedMessages,
      }),
    });
    const data = await res.json();
    const assistantMessage = data.choices?.[0]?.message;
    if (assistantMessage) {
      setMessages([...updatedMessages, assistantMessage]);
      setResponse(assistantMessage.content);
    }
  } catch {
    setResponse('Errore nella valutazione.');
  } finally {
    setLoading(false);
  }
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
