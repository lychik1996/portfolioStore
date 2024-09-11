export default function Delivery() {
  return (
    <div className="flex flex-col gap-3">
      <h4 className=" text-2xl md:text-4xl text-slate-600">Delivery</h4>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="input_info_user"
          placeholder="Country / Region"
        />
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="input_info_user"
            placeholder="First Name"
          />
          <input
            type="text"
            className="input_info_user"
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          className="input_info_user"
          placeholder="Adress"
        />
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="input_info_user"
            placeholder="City"
          />
          <input
            type="text"
            className="input_info_user"
            placeholder="Postal Code"
          />
        </div>
        <label className="flex gap-2 items-center cursor-pointer text-slate-400 hover:text-slate-500">
        <input type="checkbox" className="size-5 cursor-pointer" />
        Save this info for future
        </label>
            
      </div>
    </div>
  );
}
