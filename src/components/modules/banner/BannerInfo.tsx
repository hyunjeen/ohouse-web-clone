import Avatar from "@/components/common/Avatar";

function BannerInfo() {
  return (
    <div
      className={`flex flex-col gap- absolute bottom-0 px-9 pb-9 py-20 w-full bg-gradient-to-b from-transparent to-transparent-3 pointer-events-none`}
    >
      <h3 className={`font-medium text-white text-3xl `}>
        오늘의집 only! 미친 쾌감의 칼각 주방 수납 팀
      </h3>
      <Avatar name={"hello"} />
    </div>
  );
}

export default BannerInfo;
