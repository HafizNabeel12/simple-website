
const Grid = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
        <div className="w-full h-full border bg-black col-span-1 row-span-3"></div>
        <div className="w-full h-24 border bg-red-700 col-span-2 "></div>
        <div className="w-full h-24 border bg-purple-700"></div>
        <div className="w-full h-24 border bg-pink-700"></div>
        <div className="w-full h-24 border bg-green-700"></div>
        <div className="w-full h-full border bg-yellow-700 row-span-2 col-span-1"></div>
        <div className="w-full h-24 border bg-gray-700"></div>
        <div className="w-full h-24 border bg-blue-700"></div>

    </div>
  )
}

export default Grid