fig3d = {
  "visdat": {
    "9fc2c8b667c": ["function () ", "plotlyVisDat"]
  },
  "cur_data": "9fc2c8b667c",
  "attrs": {
    "9fc2c8b667c": {
      "alpha_stroke": 1,
      "sizes": [10, 100],
      "spans": [1, 20],
      "x": {},
      "y": {},
      "type": "scatter",
      "mode": "lines+markers",
      "marker": {
        "size": 7
      },
      "hoverinfo": "text",
      "hovertext": {},
      "name": "Fitness",
      "inherit": true
    },
    "9fc2c8b667c.1": {
      "alpha_stroke": 1,
      "sizes": [10, 100],
      "spans": [1, 20],
      "x": {},
      "y": {},
      "type": "scatter",
      "mode": "lines+markers",
      "marker": {
        "size": 7
      },
      "hoverinfo": "text",
      "hovertext": {},
      "yaxis": "y2",
      "name": "Solubliity",
      "inherit": true
    }
  },
  "layout": {
    "margin": {
      "b": 40,
      "l": 60,
      "t": 25,
      "r": 10
    },
    "xaxis": {
      "domain": [0, 1],
      "automargin": true,
      "title": "Evolution Rounds",
      "titlefont": {
        "family": "Arial",
        "size": 16
      },
      "ticks": "outside",
      "tickvals": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      "ticktext": ["WT", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10"]
    },
    "yaxis": {
      "domain": [0, 1],
      "automargin": true,
      "title": "Fold change in fitness (Variant/WT)",
      "titlefont": {
        "family": "Arial",
        "size": 16
      },
      "ticks": "outside"
    },
    "yaxis2": {
      "title": "Solubility (%)",
      "range": [0, 100],
      "titlefont": {
        "family": "Arial",
        "size": 16
      },
      "overlaying": "y",
      "side": "right"
    },
    "legend": {
      "x": 100,
      "y": -0.3
    },
    "hovermode": "closest",
    "showlegend": true
  },
  "source": "A",
  "config": {
    "showSendToCloud": false
  },
  "data": [
    {
      "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      "y": [5, 10, 20, 40, 50, 80, 95, 111, 235, 256, 256],
      "type": "scatter",
      "mode": "lines+markers",
      "marker": {
        "color": "rgba(31,119,180,1)",
        "size": 7,
        "line": {
          "color": "rgba(31,119,180,1)"
        }
      },
      "hoverinfo": ["text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text"],
      "hovertext": ["<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> WT <b><br> Fold Change Fitness: <\/b> 5 <b><br> Solubility: <\/b> 40 <b><br> kcat/kM: <\/b> 5.9", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R1 <b><br> Fold Change Fitness: <\/b> 10 <b><br> Solubility: <\/b> 44 <b><br> kcat/kM: <\/b> 13", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R2 <b><br> Fold Change Fitness: <\/b> 20 <b><br> Solubility: <\/b> 42 <b><br> kcat/kM: <\/b> 16", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R3 <b><br> Fold Change Fitness: <\/b> 40 <b><br> Solubility: <\/b> 37 <b><br> kcat/kM: <\/b> 48", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R4 <b><br> Fold Change Fitness: <\/b> 50 <b><br> Solubility: <\/b> 48 <b><br> kcat/kM: <\/b> 58", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R5 <b><br> Fold Change Fitness: <\/b> 80 <b><br> Solubility: <\/b> 57 <b><br> kcat/kM: <\/b> 140", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R6 <b><br> Fold Change Fitness: <\/b> 95 <b><br> Solubility: <\/b> 62 <b><br> kcat/kM: <\/b> 180", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R7 <b><br> Fold Change Fitness: <\/b> 111 <b><br> Solubility: <\/b> 61 <b><br> kcat/kM: <\/b> 93", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R8 <b><br> Fold Change Fitness: <\/b> 235 <b><br> Solubility: <\/b> 69 <b><br> kcat/kM: <\/b> 160", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R9 <b><br> Fold Change Fitness: <\/b> 256 <b><br> Solubility: <\/b> 86 <b><br> kcat/kM: <\/b> 120", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R10 <b><br> Fold Change Fitness: <\/b> 256 <b><br> Solubility: <\/b> 67 <b><br> kcat/kM: <\/b> 140"],
      "name": "Fitness",
      "error_y": {
        "color": "rgba(31,119,180,1)"
      },
      "error_x": {
        "color": "rgba(31,119,180,1)"
      },
      "line": {
        "color": "rgba(31,119,180,1)"
      },
      "xaxis": "x",
      "yaxis": "y",
      "frame": null
    },
    {
      "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      "y": [40, 44, 42, 37, 48, 57, 62, 61, 69, 86, 67],
      "type": "scatter",
      "mode": "lines+markers",
      "marker": {
        "color": "rgba(255,127,14,1)",
        "size": 7,
        "line": {
          "color": "rgba(255,127,14,1)"
        }
      },
      "hoverinfo": ["text", "text", "text", "text", "text", "text", "text", "text", "text", "text", "text"],
      "hovertext": ["<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> WT <b><br> Fold Change Fitness: <\/b> 5 <b><br> Solubility: <\/b> 40 <b><br> kcat/kM: <\/b> 5.9", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R1 <b><br> Fold Change Fitness: <\/b> 10 <b><br> Solubility: <\/b> 44 <b><br> kcat/kM: <\/b> 13", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R2 <b><br> Fold Change Fitness: <\/b> 20 <b><br> Solubility: <\/b> 42 <b><br> kcat/kM: <\/b> 16", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R3 <b><br> Fold Change Fitness: <\/b> 40 <b><br> Solubility: <\/b> 37 <b><br> kcat/kM: <\/b> 48", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R4 <b><br> Fold Change Fitness: <\/b> 50 <b><br> Solubility: <\/b> 48 <b><br> kcat/kM: <\/b> 58", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R5 <b><br> Fold Change Fitness: <\/b> 80 <b><br> Solubility: <\/b> 57 <b><br> kcat/kM: <\/b> 140", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R6 <b><br> Fold Change Fitness: <\/b> 95 <b><br> Solubility: <\/b> 62 <b><br> kcat/kM: <\/b> 180", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R7 <b><br> Fold Change Fitness: <\/b> 111 <b><br> Solubility: <\/b> 61 <b><br> kcat/kM: <\/b> 93", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R8 <b><br> Fold Change Fitness: <\/b> 235 <b><br> Solubility: <\/b> 69 <b><br> kcat/kM: <\/b> 160", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R9 <b><br> Fold Change Fitness: <\/b> 256 <b><br> Solubility: <\/b> 86 <b><br> kcat/kM: <\/b> 120", "<b>Ortholog: <\/b> VIM2 <b><br> Round: <\/b> R10 <b><br> Fold Change Fitness: <\/b> 256 <b><br> Solubility: <\/b> 67 <b><br> kcat/kM: <\/b> 140"],
      "yaxis": "y2",
      "name": "Solubliity",
      "error_y": {
        "color": "rgba(255,127,14,1)"
      },
      "error_x": {
        "color": "rgba(255,127,14,1)"
      },
      "line": {
        "color": "rgba(255,127,14,1)"
      },
      "xaxis": "x",
      "frame": null
    }
  ],
  "highlight": {
    "on": "plotly_click",
    "persistent": false,
    "dynamic": false,
    "selectize": false,
    "opacityDim": 0.2,
    "selected": {
      "opacity": 1
    },
    "debounce": 0
  },
  "shinyEvents": ["plotly_hover", "plotly_click", "plotly_selected", "plotly_relayout", "plotly_brushed", "plotly_brushing", "plotly_clickannotation", "plotly_doubleclick", "plotly_deselect", "plotly_afterplot"],
  "base_url": "https://plot.ly"
}
