# Code to reliably reproduce Fig 3

library(plotly)

directory = 'D:/eLife Ambassador/Readability Initiative/01 - Cryptic Genetic Variation/Supplementary Data from paper/Plots/Fig 3'
setwd(directory)

filename = 'Fig 3 - NDM1.csv'
basename = unlist(strsplit(filename, '.', fixed=TRUE))[1]
data = read.delim(filename, header=TRUE, sep=',')

# Plot a line plot for each ortholog's kcat/KM and Solubility, as a function of the rounds of evolution.
font = list(family = "Arial", size = 16)
x = list(title="Evolution Rounds", titlefont = font, ticks="outside", tickvals = 1:11, ticktext = as.character(data$Variant))
y1 = list(title="Fold change in fitness (Variant/WT)", titlefont=font, ticks="outside")
# color_palette = as.character(unique(data$Color))
y2 = list(title="k<sub>cat</sub>/K<sub>m</sub> (M<sup>-1</sup> s<sup>-1</sup>)", type = "log", range = c(-1, 4), titlefont=font, overlaying = "y", side="right")

p = plot_ly(data=data) %>%
  add_trace(x= ~Order,
            y = ~Fitness,
            type='scatter',
            mode = 'lines+markers',
            marker = list(size=7),
            hoverinfo = 'text',
            hovertext = ~paste('<b>Ortholog: </b>', Ortholog, 
                               '<b><br> Round: </b>', Variant, 
                               '<b><br> Fold Change Fitness: </b>', Fitness,
                               '<b><br> Solubility: </b>', Solubility,
                               '<b><br> kcat/kM: </b>', kcat),
            name = 'Fitness') %>%
  add_trace(x= ~Order,
            y = ~kcat,
            type='scatter',
            mode = 'lines+markers',
            marker = list(size=7),
            hoverinfo = 'text',
            hovertext = ~paste('<b>Ortholog: </b>', Ortholog, 
                               '<b><br> Round: </b>', Variant, 
                               '<b><br> Fold Change Fitness: </b>', Fitness,
                               '<b><br> Solubility: </b>', Solubility,
                               '<b><br> kcat/kM: </b>', kcat),
            yaxis = "y2",
            name = "Catalytic <br>Efficiency") %>%
  layout(xaxis=x, yaxis=y1, yaxis2=y2, legend=list(x=100, y=-0.35))

p

plot_json = plotly_json(p, jsonedit = FALSE)
write(plot_json, paste(basename, '_kcat', '.json', sep=""))


# To figure out:
# Is it possible to have images come up when things are hovered over? This was what Theo suggested for the solubility thing.