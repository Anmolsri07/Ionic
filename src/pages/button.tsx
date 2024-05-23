import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { star } from "ionicons/icons";

const Button: React.FC = () => {
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="">
          <IonTitle>Button</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* buttons */}
      <IonContent className="ion-padding">
        <IonButton routerLink="/home" color={"primary"}>
          {/* expand full */}
          <IonIcon slot="start" icon={star}></IonIcon>
          Action
        </IonButton>
        <IonInput
          value={input}
          onIonChange={(e: any) => setInput(e.target.value)}
        ></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Button;
