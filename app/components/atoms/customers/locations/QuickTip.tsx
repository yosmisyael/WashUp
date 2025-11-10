import { AlertCircle } from "lucide-react"

export default function QuickTip() {
  return (
    <div className="flex items-center justify-center border border-blue-500/50 bg-blue-50 p-4 rounded-lg space-x-5">
      <AlertCircle size={25} className=" text-gray-900" />
      <div className="flex flex-col">
        <h1 className="text-md text-gray-900 font-semibold">Quick Tips</h1>
        <p className="text-sm text-gray-700">
          Save multiple locations for faster checkout. You can always edit or
          remove locations from your profile settings.
        </p>
      </div>
    </div>
  );
}
