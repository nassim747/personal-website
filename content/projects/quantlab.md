---
title: "QuantLab – ML-Driven Trading Simulator"
description: "Developed a full-stack web platform to train machine learning models on historical stock data and simulate trading strategies based on predicted returns. Integrated model selection (Linear Regression, Random Forest, XGBoost), hyperparameter tuning, and a custom backtest engine with Sharpe ratio and drawdown metrics."
image: "/MAO.png"
githubUrl: "https://github.com/nassim747/QuantLab"
liveUrl: "https://ameur-quantlab.streamlit.app/"
tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly"]
featured: true
order: 2
slug: "quantlab"
---

# QuantLab – ML-Driven Trading Simulator

Working on QuantLab has been a hands-on journey through the entire workflow of building a financial machine learning app from scratch using Python. Starting with the basics, I learned a lot about integrating external data sources, using yfinance to fetch historical stock data, and managing common data quirks like missing values, duplicated timestamps, and multi-index columns.

A big part of the project was structuring the data for predictive modeling. I implemented pipelines to generate features like percent and log returns, and set up a flexible forecast horizon so users can experiment with different prediction intervals. I also got to design the UI and UX with Streamlit, making the app interactive and visually engaging with Plotly charts, sidebar options, and real-time metrics.

On the machine learning side, I deepened my understanding of supervised regression, using models like Linear Regression, Random Forest, and XGBoost. I handled train/test splits, tracked evaluation metrics (RMSE, MAE, R²), and made the training process interactive, letting users tweak hyperparameters or swap models on the fly. Managing session state for user actions and model results was a practical lesson in building robust web applications.

Perhaps the most exciting part was building a simple trading strategy simulator. I learned how to translate model predictions into trading signals, apply realistic transaction costs, and compute key performance stats like Sharpe ratio and max drawdown. Backtesting strategies on out-of-sample data and visualizing equity curves made the ML results tangible and actionable.