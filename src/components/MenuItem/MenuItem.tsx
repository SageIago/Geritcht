 import "./MenuItem.css"
interface Props {
  title: string;
  tags: string;
  price: string;
}


const MenuItem = ({ title, tags, price }: Props) => {
  return (
    <div className="app_menu_item">
      <div className="app_menu_item-head">
        <div className="app_menu_item-name">
          <p className="p_Inter" style={{ marginBottom: "#DCCA87" }}>
            {title}
          </p>
        </div>

        <div className="app_menu_item-dash"></div>

        <div className="app_menu_item-price">
          <p className="p_Inter" style={{ marginBottom: "#DCCA87" }}>
            {price}
          </p>
        </div>

        <div className="app_menu_item-tags">
          <div className="p_opensans" style={{ marginBottom: "#DCCA87" }}>
            {tags}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
