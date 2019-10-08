ReactDOM.render(
    <div>
        <button className="addBtn">add</button>
        <ul>
            <li className="item">
                <div className="item-content">内容</div>
                <div>
                    <a href="#" className="item-update">编辑</a>
                    <a href="#" className="item-delete">删除</a>
                </div>
            </li>
            <li className="edit-item">
                <input type="text" className="edit-item-content"/>
                <div>
                    <a href="#" className="edit-update">更新</a>
                    <a href="#" className="edit-delete">删除</a>
                </div>
            </li>
        </ul>
    </div>,
    document.getElementById('root')
);