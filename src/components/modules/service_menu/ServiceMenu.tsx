import ServiceMenuItem from "@/components/modules/service_menu/ServiceMenuItem";
import { serviceMenuItems } from "@/dummyData/serviceMenu.data";

function ServiceMenu() {
  return (
    <div className={`grid grid-cols-5  md:grid-cols-10 `}>
      {serviceMenuItems.map(({ title, iconUrl }, index) => (
        <ServiceMenuItem key={index} title={title} iconUrl={iconUrl} />
      ))}
    </div>
  );
}

export default ServiceMenu;
