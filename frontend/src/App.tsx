import { createSignal } from 'solid-js';
import './App.css';

function App() {
  // Сигналы для управления состоянием
  const [selectedFile, setSelectedFile] = createSignal<File | null>(null);
  const [uploadStatus, setUploadStatus] = createSignal<string>('');
  const [isUploading, setIsUploading] = createSignal(false);

  // Обработчик выбора файла
  const handleFileChange = (event: Event) => {
    const input = event.currentTarget as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      setSelectedFile(input.files[0]);
      setUploadStatus(''); // Сбрасываем статус при выборе нового файла
    }
  };

  // Функция загрузки файла на бэкенд
  const handleUpload = async () => {
    if (!selectedFile()) {
      setUploadStatus('Ошибка: Пожалуйста, выберите файл для загрузки.');
      return;
    }

    setIsUploading(true);
    setUploadStatus('Загрузка файла...');

    const formData = new FormData();
    formData.append('audioFile', selectedFile()!);

    try {
      // Отправляем запрос на наш бэкенд
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      // Парсим JSON-ответ от сервера
      const result = await response.json();

      if (!response.ok) {
        // Если сервер вернул ошибку (статус 4xx или 5xx)
        // Используем унифицированный формат ошибки
        throw new Error(result.error?.message || 'Произошла неизвестная ошибка');
      }

      // Используем унифицированный формат успешного ответа
      setUploadStatus(`Успешно! Файл "${result.data.originalname}" загружен.`);

    } catch (error) {
      if (error instanceof Error) {
        setUploadStatus(`Ошибка: ${error.message}`);
      } else {
        setUploadStatus('Произошла непредвиденная ошибка при загрузке.');
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div class="card">
      <h1>Загрузка аудиофайла</h1>
      <input type="file" onChange={handleFileChange} accept="audio/*" />
      <button onClick={handleUpload} disabled={isUploading()}>
        {isUploading() ? 'Загрузка...' : 'Загрузить'}
      </button>
      {uploadStatus() && <p class="status-message">{uploadStatus()}</p>}
    </div>
  );
}

export default App;
