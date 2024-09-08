export default function () {
  if (PROD) {
    const logo = `
______________________________________________________

 ____  _  _  ____  __    ____  _  _  ____  __ _  ____ 
(__  )( \/ )(  __)(  )  (  __)( \/ )(  __)(  ( \(_  _)
 / _/ / \/ \ ) _) / (_/\ ) _) / \/ \ ) _) /    /  )(  
(____)\_)(_/(____)\____/(____)\_)(_/(____)\_)__) (__)  
                                                          
______________________________________________________
                   author:Zm-element
`;

    const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
background-clip: text;
color: transparent;
font-size: 16px; 
line-height: 1;
font-family: monospace;
font-weight: 600;
`;

    console.info(`%c${logo}`, rainbowGradient);
  } else if (DEV) {
    console.log("[Zm-element]:dev mode...");
  }
}
