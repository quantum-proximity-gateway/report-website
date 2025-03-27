import { BASE_PATH } from "@/config";

export default function loader({
    src,
    width,
    quality,
  }: {
    src: string
    width: number
    quality?: number
  }) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `${BASE_PATH}${src}`
  }