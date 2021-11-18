import { useState, React, useEffect } from "react";
import FolderTree, { testData } from "react-folder-tree";
import "react-folder-tree/dist/style.css";
const axios = require("axios");

const FolderStruct = () => {
  const [folderData, setfolderData] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [showTree, setShowTree] = useState(false);
  const [finalData, setFinalData] = useState({});
  const [fileSize, setFileSize] = useState(0);
  const [fileCount, setFileCount] = useState(0);

  let tempFileCount = 0;
  let tempFileSize = 0;
  let treeData = {
    name: "HeadNode",
    children: [],
  };

  useEffect(() => {
    axios
      .get("https://dev21.becollective.com/api/v2/coding-challenges/dirs")
      .then((res) => {
        setfolderData(res.data);
      });
  }, []);

  const readArrayNode = async (inputArr) => {
    let folderReturnObj = [];

    inputArr.forEach(async (data) => {
      if (data.type == "file") {
        folderReturnObj.push({ name: data.name });
        tempFileCount++;
        tempFileSize = tempFileSize + Number(data.size);
      } else if (data.type == "folder") {
        let loopChild = await readArrayNode(data.children);
        folderReturnObj.push({ name: data.name, children: loopChild });
      }
    });

    return folderReturnObj;
  };

  const settingFolder = async () => {
    setShowButton(false);
    setShowTree(true);
    folderData.forEach(async (item, index) => {
      let returnObj = {
        name: item.name,
        children: [],
      };
      item.children.forEach(async (child) => {
        if (child.type == "file") {
          returnObj.children.push({ name: child.name });
          tempFileCount++;
          tempFileSize = tempFileSize + Number(child.size);
        } else if (child.type == "folder") {
          let arrTreeObject = await readArrayNode(child.children);
          returnObj.children.push({
            name: child.name,
            children: arrTreeObject,
          });
        }
      });
      treeData.children.push(returnObj);
    });
    setFinalData(treeData);
    setFileCount(tempFileCount);
    setFileSize(tempFileSize);
  };

  return (
    <div className="container">
      {showButton && (
        <button onClick={settingFolder}>
          Please Click to load a random Folder Structure!
        </button>
      )}
      {showTree && (
        <div>
          <FolderTree data={finalData} showCheckbox={false} />
          <span>File Count : {fileCount}</span>
          <br />
          <span>File Size : {fileSize}</span>
        </div>
      )}
    </div>
  );
};

export default FolderStruct;
