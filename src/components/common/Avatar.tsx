import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface AvatarProps {
  src?: string;
  name?: string;
}

function Avatar({ src, name }: AvatarProps) {
  return (
    <div className={`flex items-center gap-2 text-white`}>
      <div className={`flex bg-gray-400 p-1 rounded-[50%]`}>
        {src ? (
          <Image src={src} alt={"유저아바타이미지"} />
        ) : (
          <FontAwesomeIcon icon={faUser} width={16} height={16} />
        )}
      </div>
      {name && <span className={`translate-y-[-1px]`}>{name}</span>}
    </div>
  );
}

export default Avatar;
