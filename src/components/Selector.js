import { useRouter } from "next/router";

function Selector() {
  const router = useRouter();
  const handleChange = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };
  return (
    <select
      onChange={handleChange}
      className="border-2 rounded hover:text-teal-500 hover:border-teal-500 cursor-pointer"
    >
      <option value="en" defaultValue>
        en
      </option>
      <option value="es">es</option>
    </select>
  );
}

export default Selector;
