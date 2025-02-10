import Icon from "@/shared/components/icon";
import { NavItems } from "@/shared/layout/header/types/nav-item";
import { memo } from "react";

interface Props {
  onHover: Function;
  onLeave: Function;
  title: NavItems;
}

export default memo(function NavItem({ title, onHover, onLeave }: Props) {
  return (
    <div
      className="group relative flex items-center hover:underline"
      onMouseOver={() => onHover(title)}
      onMouseLeave={() => onLeave()}
    >
      {title}
      <Icon name="chevron-down" className="group-hover:rotate-180" />
    </div>
  );
});
