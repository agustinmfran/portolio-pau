import { useRouter } from "next/router";

function Selector() {
  const router = useRouter();
  const handleChange = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };
  return (
    <select
      onChange={handleChange}
      className="border-2 rounded hover:text-fuchsia-700 hover:border-fuchsia-700 cursor-pointer"
    >
      <option value="fr" defaultValue>
        fr
      </option>
      <option value="en">en</option>
      <option value="es">es</option>
    </select>
  );
}

export default Selector;
