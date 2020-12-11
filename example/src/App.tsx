import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { BotwGridMenu, BotwMenuItem, BotwTabs } from 'react-botw-menu-components'

import food from './_food'
import items from './_items'
import books from './_books'

const App = () => {
  const [activeItem, setActionItem] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<any>("food")

  return (
    <div className="botw-background">
      <BotwMenuItem classes={"br-none bl-none bt-none"} style={{ height: "100px" }} active={false}>
        <div className="text-center botw-text mt-3">
            <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='http://github.com/darylbuckle/react-botw-menu-components'>GitHub</a></h5>
            <h2 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='.'>Demo</a></h2>
            <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='https://www.npmjs.com/package/react-botw-menu-components'>Npm</a></h5>
        </div>
      </BotwMenuItem>
      <div className="container-xl">
        <div className="row" style={{ paddingTop: "50px", paddingBottom: "20px" }}>
          <div className="col-md-6">
            <BotwTabs
              activeId={activeTab}
              onChange={(tab) => setActiveTab(tab.id)}
              tabs={[
                {
                  id: "food",
                  name: "Food",
                  faicon: <i className="fa fa-cutlery" />,
                  content: (
                    <BotwGridMenu
                      key={"food-grid"}
                      columnCount={undefined}
                      items={food}
                      onItemActive={(item) => setActionItem(item)}
                      onItemInactive={() => setActionItem(null)}
                      onItemSelected={(item) => window.alert(`Selected ${item.name}.`)}
                    />
                  )
                },
                {
                  id: "items",
                  name: "Items",
                  faicon: <i className="fa fa-bars" />,
                  content: (
                    <BotwGridMenu
                      key={"items-grid"}
                      columnCount={undefined}
                      items={items}
                      onItemActive={(item) => setActionItem(item)}
                      onItemInactive={() => setActionItem(null)}
                      onItemSelected={(item) => window.alert(`Selected ${item.name}.`)}
                    />
                  )
                },
                {
                  id: "book",
                  name: "Books",
                  faicon: <i className="fa fa-book" />,
                  content: (
                    <BotwGridMenu
                      key={"books-grid"}
                      columnCount={undefined}
                      items={books}
                      pageSize={4}
                      onItemActive={(item) => setActionItem(item)}
                      onItemInactive={() => setActionItem(null)}
                      onItemSelected={(item) => window.alert(`Selected ${item.name}.`)}
                    />
                  )
                }
              ]}
            />
          </div>
          <div className="col-md-6 pl-md-5 pr-md-0">
            {activeItem ? 
              <BotwMenuItem classes={"br-none"} active={false}>
                <h3 className={"menu-title"}>{activeItem.name}</h3>
                <hr />
                {activeItem.note ? activeItem.note.split('\n').map((str: React.ReactNode) => <p>{str}</p>) : null}
              </BotwMenuItem>
            : null}
          </div>
        </div>
      </div>
      <BotwMenuItem 
        classes={"br-none bl-none bb-none"} 
        containerStyle={{ position: "absolute", bottom: "0px", left: "0px", right: "0px" }}
        style={{ height: "80px" }}
        active={false}>
          <div className="float-right botw-text">
              <div className="botw-button" style={{ margin: "5px 20px", display: "inline-block" }}>
                Sort
                <div className="botw-button-content">
                  Y
                </div>
              </div>

              <div className="botw-button" style={{ margin: "5px 20px", display: "inline-block" }}>
                Back
                <div className="botw-button-content">
                  B
                </div>
              </div>
          </div>
      </BotwMenuItem>
    </div>
  )
}

export default App
