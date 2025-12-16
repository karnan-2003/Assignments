function Layout({children}){
    return(
        <div>
            <header style={{padding:"10px"}}>
            <h2>9.My App</h2>
            </header>
            <main style={{}}>
                {children}
            </main>
            <footer>
                <p>© 2025 My App</p>

            </footer>
        </div>
    );
};

export default Layout;
