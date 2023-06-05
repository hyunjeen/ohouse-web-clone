import Avatar from '@/components/common/Avatar';

function BannerInfo() {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 flex w-full flex-col gap-1 bg-gradient-to-b from-transparent to-transparent-3 px-9 py-20 pb-9`}
    >
      <h3 className={`text-3xl font-medium text-white `}>
        오늘의집 only! 미친 쾌감의 칼각 주방 수납 팀
      </h3>
      <Avatar name={'hello'} />
    </div>
  );
}

export default BannerInfo;
