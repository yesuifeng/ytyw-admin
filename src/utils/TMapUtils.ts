export const initTMap = () => {
  const TK = 'UT7BZ-GOW3X-QF74M-TFKP5-L2453-4PBUD'
  const TMap_URL =
    'https://map.qq.com/api/gljs?v=1.exp&libraries=tools,service&key=' +
    TK +
    '&callback=onMapCallback'
  return new Promise((resolve) => {
    // 如果已加载直接返回
    if (typeof (window as any).TMap !== 'undefined') {
      resolve((window as any).TMap)
      return true
    }
    ;(window as any).onMapCallback = function () {
      resolve((window as any).TMap)
    }
    // 插入script脚本
    const scriptNode = document.createElement('script')
    scriptNode.setAttribute('type', 'text/javascript')
    scriptNode.setAttribute('src', TMap_URL)
    document.body.appendChild(scriptNode)
  })
}
