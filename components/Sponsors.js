import Sponsor from "./Sponsor";

function Sponsors() {
  return (
    <div>
      <h3 className=" font-medium text-gray-500 mb-3">Sponsored</h3>
      {[1, 2, 3].map((val) => (
        <Sponsor key={val} />
      ))}
    </div>
  );
}

export default Sponsors;
