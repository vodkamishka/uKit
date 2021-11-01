import React, { useState } from 'react';
import './app.sass';

interface IError {
  textError: string;
  value: boolean;
}

function App() {
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [error, setError] = useState<IError>({
    textError: '',
    value: false,
  });

  const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ textError: '', value: false });
    setPassword(e.target.value);
  };

  const handlerRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ textError: '', value: false });
    setRepeatPassword(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length === 0 || repeatPassword.length === 0) {
      setError({ textError: 'Заполните пустые поля', value: true });
    } else if (password.length < 8 || repeatPassword.length < 8) {
      setError({ textError: 'Пароль должен содержать не менее 8 символов', value: true });
    } else if (!password.match(/[A-Z]/)) {
      setError({ textError: 'Пароль должен содержать одну заглавную букву', value: true });
    } else if (password !== repeatPassword) {
      setError({ textError: 'Значения полей не совпадают', value: true });
    }
  };

  return (
    <div className="app">
      <div className="app_title">Смена пароля</div>
      <div className="app_description">
        Пароль должен содержать не менее 8 символов и одну заглавную букву.
      </div>
      <form>
        <label htmlFor="password">
          Пароль
          <input type="text" id="password" onChange={handlerPassword} value={password} required />
        </label>
        <label htmlFor="repeat-password">
          Повторите пароль
          <input
            type="password"
            id="repeat-password"
            onChange={handlerRepeatPassword}
            value={repeatPassword}
            required
          />
        </label>
        <div>
          <button type="submit" onClick={handleClick}>
            Сменить пароль
          </button>
        </div>
      </form>
      <div className="app_error">{error.textError}</div>
    </div>
  );
}

export default App;
