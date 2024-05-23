import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    console.log(username, password);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          onIonChange={(e: any) => setUsername(e.target.value)}
          placeholder="Username?"
        ></IonInput>
        <IonInput
          onIonChange={(e: any) => setPassword(e.target.value)}
          placeholder="Password?"
        ></IonInput>
        <IonButton onClick={login}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
