import { ConvexHullCollider } from "@react-three/rapier";

const vertices = [
  -0.711102,  0.303999,  0.71107,
  0.711102,   0.303999,  -0.71107,
  0.711102,   0.303999,  0.71107,
  -0.711102,  0.303999,  -0.71107,
  0.0,        3.0,    0.0,  
  0.0,        -1.0,  0.0,
].map((n) => n / 10);

export function D4Collider() {
  return <ConvexHullCollider args={[vertices]} />;
}
