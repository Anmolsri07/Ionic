import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonButtons,
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
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { star } from "ionicons/icons";

const Home: React.FC = () => {
  const arr = [
    {
      name: "Finn",
      roll: "1",
    },
    {
      name: "Finn",
      roll: "2",
    },
    {
      name: "Finn",
      roll: "3",
    },
    {
      name: "Finn",
      roll: "4",
    },
    {
      name: "Finn",
      roll: "5",
    },
  ];
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        Ionic looks pretty cool
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <ExploreContainer /> */}
        {/* <IonList>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <IonItem key={i}>
                <IonText>List Item {i}</IonText>
              </IonItem>
            ))}
        </IonList> */}
        {/* <IonList>
          {arr.map((elem) => (
            <IonItem key={elem.name}>
              <IonText>
                {elem.name} {elem.roll}
              </IonText>
            </IonItem>
          ))}
        </IonList> */}
        <IonList>
          {arr.map((elem) => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img src="/assets/icon/icon.png" alt="" />
                </IonAvatar>
                <IonLabel className="ion-padding">
                  <h2>{elem.name}</h2>
                  <p>{elem.roll}</p>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption onClick={() => alert("delete!")}>
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>

      {/* buttons */}
      <IonContent className="ion-padding">
        <IonButton routerLink="/button" color={"primary"}>
          {/* expand full */}
          <IonIcon slot="start" icon={star}></IonIcon>
          Next page
        </IonButton>
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register">Register</IonButton>
        <IonInput
          value={input}
          onIonChange={(e: any) => setInput(e.target.value)}
        ></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Home;
