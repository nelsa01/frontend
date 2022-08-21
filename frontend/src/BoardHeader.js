function BoardHeader() {
  return (
    <>
      <div className="h-23 bg-cover" style={{backgroundImage:'url("https://raw.githubusercontent.com/Jmukakalisa/Jeanne_Practice/main/daniel-korpai-pKRNxEguRgM-unsplash.jpg")'}}>
      </div>
      <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
          <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white">
            <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          </div>
          <div className="pt-2 pl-4">
            <h1 className="text-gray-300 text-3xl">react: reddit clone mern</h1>
            <h5 className="text-blue-500">r/webdev</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export  default BoardHeader;