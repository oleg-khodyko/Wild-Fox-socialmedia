Route install:
    Terminal: npm install react-router-dom -save
пакет установится в node_modules и не пойдет в Git-репозиторий
-save добавляет пакет в psckage.json, потому нужно будет установить обновления (npm install),
для добавления пакета

<Route path="/profile" component={Profile} /> --- что открываем

<NavLink to="/profile">Profile</NavLink> ---- откуда открываем
    <NavLink> вмеnсо <a>
    to вместо href

Class Active:
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>

  <div className={`${classes.dialog} ${classes.active}`}>
---
Route exact
<div className={classes.dialog}>
    <NavLink to='/dialogs/1' activeClassName={classes.active}>Oleg</NavLink>
</div>
получаем: http://localhost:3000/dialogs/1
<Route exact path="/profile" component={Profile} /> --- что открываем
exact - точная ссылка
т.е. http://localhost:3000/dialogs/1 уже не будет работать, т.к. есть Exact
