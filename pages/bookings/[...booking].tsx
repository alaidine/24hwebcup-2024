import { useRouter } from "next/router";
import firebase from "@/firebase/clientApp";

export default function Booking() {
  const router = useRouter();
  const { booking } = router.query;

  const db = firebase.firestore();

  return (
    <div>
      <h1>Booking: {booking}</h1>
    </div>
  );
}
