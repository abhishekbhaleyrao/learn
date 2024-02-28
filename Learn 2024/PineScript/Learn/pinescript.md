<div id="top"></div><br />

- [Structure](#structure)
  - [Structure](#structure-1)
  - [Comments](#comments)
  - [Version](#version)
  - [Declaration statement](#declaration-statement)
- [Code](#code)


<br />

# Structure

<br />

## Structure

1. Comments
2. Version
3. Declaration statement
4. Code
5. Line wrapping

<br />
<br />

## Comments

- Use //
- Example: // This is my comment

<br />
<br />

## Version

- Example: //@version=5

<br />
<br />

## Declaration statement

1. indictor()<br />
   - Parameter: <br />
     - indicator(title, shorttitle, timeframe, timeframe_gaps, overlay, ...)
   - Must Call Function<br />
     - plot(), plotshape(), barcolor(), line.new(), ...
   - Example: <br />
     - indicator(title="My Title", shorttitle="MT", timeframe="", timeframe_gaps="true", overlay="true")

<br />

2. strategy()<br />
   - Parameter: <br />
     - strategy(title, shorttitle, overlay, format, precision, scale, pyramiding,
       calc_on_order_fills, calc_on_every_tick, max_bars_back,
       backtest_fill_limits_assumption, default_qty_type, default_qty_value,
       initial_capital, currency, slippage, commission_type, commission_value,
       process_orders_on_close, close_entries_rule, margin_long, margin_short,
       explicit_plot_zorder, max_lines_count, max_labels_count, max_boxes_count,
       linktoseries)
   - Must Call Function<br />
     - strategy.entry(), ...

<br />
3. library()<br />
   - Parameter: <br />
     - library(title, shorttitle, overlay)

<br />
<br />
<br />
<p align="right">(<a href="#top">back to top</a>)</p>

# Code

- Variable declaration

- Variable reassignment(:=)
- History referencing operator(open[1])
- function declaration
- built-in function call, user-defined function call or library function call
- if, for, while or switch structure

  <br />
  <br />

<br />
<br />
<br />
<p align="right">(<a href="#top">back to top</a>)</p>
