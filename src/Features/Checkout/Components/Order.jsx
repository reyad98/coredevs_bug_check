import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Btn from "../../../Components/Share/Btn";
import { useGlobalCtx } from "../../../Contexts/GlobalProvider";
import { TbRow } from "./Handler";

const CartProducts = [
  { id: 1, product: "External SSD USB 3.1 750 GB", price: "10" },
  { id: 2, product: "External SSD USB 2.1 150 GB", price: "18" },
];
export default function Order() {
  const { open, setTotalPrice, totalPrice, setOpen } = useGlobalCtx();
  const total = CartProducts.reduce(
    (accumulator, currentValue) =>
      Number(accumulator) + Number(currentValue.price),
    0
  );

  useEffect(() => {
    setTotalPrice(total + 1);
  }, []);
  return (
    <div className="p-4 bg-header">
      <div className="border border-border border-opacity-5 rounded-[0.5rem] py-4 px-5">
        <h1 className="text-white text-xl pb-4 border-b">Your order</h1>
        <table className="w-full">
          <tbody className="text-zinc-300">
            <tr className="border-b">
              <td className="pt-5 pb-2 text-zinc-300 text-gray-300	 font-semibold">
                Product
              </td>
              <td className="pt-5 pb-2 text-base font-semibold text-zinc-300 text-right">
                Subtotal
              </td>
            </tr>
            {CartProducts.map((product) => (
              <TbRow key={product.id} label={product.product}>
                ৳ {product.price} TK{" "}
              </TbRow>
            ))}
            <TbRow label="Subtotal">
              <p className="text-zinc-200">৳ {total}TK </p>
            </TbRow>
          </tbody>
        </table>
        <p className="py-5 text-neutral-300">Shipping</p>
        <div className="space-y-2 border-b border-border border-opacity-5 pb-5">
          <div className="flex items-center justify-between text-zinc-400">
            <label className="flex items-center">
              <input
                type="radio"
                name="shipping"
                defaultChecked
                className="mr-2 accent-yellow-400 outline-none border-none "
                value="1"
                onChange={() => setTotalPrice(totalPrice - 2 + 1)}
              />
              Inside Dhaka
            </label>
            <p className="text-zinc-300">৳ 1.00 tk </p>
          </div>
          <div className="flex items-center justify-between text-zinc-400">
            <label className="flex items-center">
              <input
                type="radio"
                name="shipping"
                className="mr-2 accent-yellow-400"
                value="2"
                onChange={() => setTotalPrice(totalPrice - 1 + 2)}
              />
              Outside Dhaka
            </label>
            <p className="text-zinc-300">৳ 2.00 tk </p>
          </div>
        </div>
        <div className="flex justify-between py-5">
          <p className="text-neutral-300 text-base font-normal">
            Estimated Total
          </p>
          <p className="font-bold text-xl text-textHeader text-zinc-100">
            ৳ {totalPrice} TK{" "}
          </p>
        </div>
        <Btn>
          <Link to="/pay">Contunie to Payment</Link>
        </Btn>
      </div>
    </div>
  );
}
