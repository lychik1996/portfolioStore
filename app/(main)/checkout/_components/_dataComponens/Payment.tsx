export default function Payment() {
  return (
    <div className="flex flex-col gap-3 ">
      <h4 className=" text-2xl md:text-4xl text-slate-600">Payment</h4>
      <div
        className="flex flex-col gap-3 "
        style={{ background: 'rgb(245, 245, 245)' }}
      >
        <input
          type="text"
          className="input_info_user"
          placeholder="Credit Card"
        />
        <div className="flex flex-col gap-3 px-3 pt-3 pb-5">
          <input
            type="text"
            className="input_info_user"
            placeholder="Card Number"
          />
          <div className="flex flex-row sm:flex-col md:flex-row  gap-2">
            <input
              type="text"
              className="input_info_user"
              placeholder="Expiration Date "
            />
            <input
              type="password"
              className="input_info_user"
              placeholder="Security Code"
            />
          </div>
          <input type="text" className="input_info_user" placeholder="Card Holder Name" />
          <label className="flex gap-2 items-center cursor-pointer  text-slate-400 hover:text-slate-500">
            <input type="checkbox" className="size-5 cursor-pointer" />
            Save this info for future
          </label>
        </div>
      </div>
    </div>
  );
}
