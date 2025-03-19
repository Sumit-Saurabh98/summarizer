import { AlertTriangle } from "lucide-react"


export const ErrorCard = () => {
  return (
        <div className="w-full flex items-center justify-center gap-x-2">
        <AlertTriangle className="text-destructive"/>
        </div>
  )
}