import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchPosition] = useSearchParams();
  const mapLat = searchPosition.get("lat");
  const mapLng = searchPosition.get("lng");

  return [mapLat, mapLng];
}
