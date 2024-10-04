import { BeatLoader } from "react-spinners";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="container mx-auto p-4 max-w-4xl text-center">
      <div className="hero-content">
      <BeatLoader color="#E779C1" size={30} speedMultiplier={1}/>
      </div>
    </div>
  );
}