import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {
  if (!localStorage.getItem('anoushkabh')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={"152b07bd-b519-42c6-8692-da6e5f1ccb30"}
      userName={localStorage.getItem('anoushkabh')}
      userSecret={localStorage.getItem('Anoushka')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
