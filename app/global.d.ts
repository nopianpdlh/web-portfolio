// File ini digunakan untuk mendeklarasikan tipe modul kustom.

// Mengizinkan impor file .glb dan .png di TypeScript
declare module "*.glb";
declare module "*.png";

// Deklarasi tipe untuk library meshline
declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

// Deklarasi global untuk elemen JSX kustom dari react-three-fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

// Pastikan ada export kosong jika tidak ada export lain
export {};
