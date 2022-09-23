
const server=process.env.REACT_APP_HOST_NAME
// const server="172.130.102.44:7777"
// const server="localhost:7777"
export const url=`http://${server}/api`
export const ioUrl=`ws://${server}`