# Code to reliably reproduce Fig 3

library(plotly)

directory = 'D:/eLife Ambassador/Readability Initiative/01 - Cryptic Genetic Variation/Supplementary Data from paper/Plots/Fig 3'
setwd(directory)

filename = 'Fig 3 - VIM2.csv'
basename = unlist(strsplit(filename, '.', fixed=TRUE))[1]
data = read.delim(filename, header=TRUE, sep=',')

# Plot a line plot for each ortholog's kcat/KM and Solubility, as a function of the rounds of evolution.
font <- list(family = "Arial", size = 16)
x = list(title="Evolution Rounds", titlefont = font, ticks="outside", tickvals = 1:11, ticktext = as.character(data$Variant))
y1 = list(title="Fold change in fitness (Variant/WT)", titlefont=font, ticks="outside")
# color_palette = as.character(unique(data$Color))
y2 = list(title="kcat/KM (M-1 s-1)", type = "log", range = c(-1, 3), titlefont=font, ticks="outside", overlaying = "y", side="right")

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
                               '<b><br> kcat/kM: </b>', kcat)) %>%
  add_trace(x= ~Order,
            y = ~Solubility,
            type='scatter',
            mode = 'lines+markers',
            marker = list(size=7),
            hoverinfo = 'text',
            hovertext = ~paste('<b>Ortholog: </b>', Ortholog, 
                               '<b><br> Round: </b>', Variant, 
                               '<b><br> Fold Change Fitness: </b>', Fitness,
                               '<b><br> kcat/kM: </b>', kcat),
            yaxis = "y2") %>%
  layout(p, xaxis=x, yaxis=y1, yaxis2=y2, showlegend = FALSE)

p

plot_json = plotly_json(p, jsonedit = FALSE)
write(plot_json, paste(basename, '.json', sep=""))