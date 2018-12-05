// URL: https://beta.observablehq.com/d/cdcbf1da92879a08
// Title: Cost Line Plot
// Author: Andrew Smith (@asmith20)
// Version: 50
// Runtime version: 1

const m0 = {
  id: "cdcbf1da92879a08@50",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Cost Line Plot`
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require('d3')
)})
    },
    {
      name: "billboard",
      inputs: ["require"],
      value: (function(require){return(
require('billboard.js')
)})
    },
    {
      name: "bb",
      inputs: ["billboard"],
      value: (function(billboard){return(
billboard.bb
)})
    },
    {
      name: "billboardCss",
      inputs: ["html","resolve"],
      value: (function(html,resolve){return(
html`<link href='${resolve('billboard.js/dist/billboard.css')}' rel='stylesheet' />`
)})
    },
    {
      name: "costline",
      inputs: ["DOM"],
      value: (function(DOM)
{
  const div = DOM.element('div', { style: `width:940px;height:350px` })
  return div
}
)
    },
    {
      name: "costlineplot",
      inputs: ["bb","costline"],
      value: (function(bb,costline){return(
bb.generate({
  data: {
    x: "x",
    rows: [
      [1,2,3,4,"x"],
[63467.56,60335.13,59446.509,60005.04,2002],
[65544.43,62915.09,62063.61,63135.45,2003],
[64313.68,62079.80,61816.58,65161.03,2004],
[67944.14,66732.47,67341.91,69222.98,2005],
[69081.83,69480.13,71857.31,75537.89,2006],
[70259.94,71946.46,72950.73,75972.48,2007],
[71781.45,71903.11,73530.03,76628.42,2008],
[71883.07,72105.06,74490.33,76799.90,2009],
[76192.21,77620.19,80198.74,83252.18,2010],
[78491.58,79688.33,82149.11,85959.39,2011],
[71487.98,79785.08,83223.88,88288.36,2012],
[65942.49,79918.82,83106.06,87759.89,2013],
[72852.06,85158.94,89025.62,92512.06,2014],
[72160.21,86944.16,90272.37,93293.70,2015],
[73544.72,90232.38,93586.15,96286.25,2016],
[73032.47,91949.82,95263.08,98079.10,2017]
      ],
    type: "line",
    names: {
      1:"1st Quartile",
      2:"2nd Quartile",
      3:"3rd Quartile",
      4:"4th Quartile"
    },
  },
  axis: {
    x: {
      label: "Year"
    },
    y: {
      label: "Average Cost ($)"
    },
  },
  bindto: costline
})
)})
    },
    {

    }
  ]
};

const notebook = {
  id: "cdcbf1da92879a08@50",
  modules: [m0]
};

export default notebook;
