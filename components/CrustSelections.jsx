const CrustSelections = ({ crust, setCrust }) => {
  return (
    <div className="flex justify-center items-center lg:justify-start">
      {/* crust */}
      <div className="flex gap-x-12 items-center lg:justify-start">
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-red-600 checked:to-white checked:border-red-400 cursor-pointer"
            type="radio"
            name="crust"
            value="Geneleksel"
            onChange={(e) => setCrust(e.target.value)}
            checked={crust === "Geneleksel"}
          />
          Geneleksel
        </label>
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-red-600 checked:to-white checked:border-red-400 cursor-pointer"
            type="radio"
            name="crust"
            value="Özel"
            onChange={(e) => setCrust(e.target.value)}
            checked={crust === "Özel"}
          />
          Özel
        </label>
      </div>
    </div>
  );
};
export default CrustSelections;
