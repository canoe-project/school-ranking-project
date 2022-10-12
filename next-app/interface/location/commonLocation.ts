export interface ILocationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}
export interface IMarkers {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}
