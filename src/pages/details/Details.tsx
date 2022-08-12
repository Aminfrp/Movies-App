import DetailsHeader from "../../components/detailsHeader/DetailsHeader";
import DetailsInfo from "../../components/detailsInfo/DetailsInfo";

const Details = () => {
  return (
    <>
      <DetailsHeader />
      <DetailsInfo />
      {/* description */}
      <div className="mx-[208px]">
        Light years from Earth, 26 years after being abducted, Peter Quill finds
        himself the prime target of a manhunt after discovering an orb wanted by
        Ronan the Accuser. Light years from Earth, 26 years after being
        abducted, Peter Quill finds himself the prime target of a manhunt after
        discovering an orb wanted by Ronan the Accuser. Light years from Earth,
        26 years after being abducted, Peter Quill finds himself the prime
        target of a manhunt after discovering an orb wanted by Ronan the
        Accuser.
      </div>
      {/* Credit */}
      <div className="flex flex-col mb-[400px] mt-[80px] mx-[208px]">
        <p className="font-[700]">Credit:</p>
        <p className="text-[14px]">
          Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace ,
          Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace
          and 19 more.
        </p>
      </div>
    </>
  );
};

export default Details;
