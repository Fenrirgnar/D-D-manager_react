import './app-info.css';

const AppInfo = ({products, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет товаров</h1>
            <h2>Число товаров: {products}</h2>
            <h2>Редкое и артефакты: {increased}</h2>
        </div>
    )
}

export default AppInfo;