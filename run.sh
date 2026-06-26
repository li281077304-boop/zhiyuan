#!/bin/bash
# 数学组周报一键生成 — 双击或用终端运行
# 用系统自带的 python3，不需要装任何东西

cd "$(dirname "$0")"

echo "==============================="
echo "  数学组周数据自动填报"
echo "==============================="

# 输入周次
read -p "第几周？(1-5): " WEEK
WEEK=${WEEK:-3}

# 找排课列表
SCHED=$(ls -t 排课列表*.xls 排课列表*.xlsx 2>/dev/null | head -1)
if [ -z "$SCHED" ]; then
    echo "❌ 找不到排课列表文件"
    exit 1
fi

# 找WPS汇总
WPS=$(ls -t 二校数学组数据汇总*.xls 2>/dev/null | head -1)
if [ -z "$WPS" ]; then
    echo "❌ 找不到WPS汇总文件"
    exit 1
fi

# 找续推数据
RENEW=$(ls -t 2026年度续费*.xlsx 2>/dev/null | head -1)

# 找上一周的底稿（文件包含指定周次）
PREV=$((WEEK - 1))
BASE=$(ls "数学组数据统计表-宣城二校6月第${PREV}周"*.xls 2>/dev/null | head -1)
if [ -z "$BASE" ]; then
    # 降级：找任何手动数据
    BASE=$(ls 数学组数据统计表-宣城二校6月第*周*.xls 2>/dev/null | grep -v "第${WEEK}周" | head -1)
fi
if [ -z "$BASE" ]; then
    echo "❌ 找不到第${PREV}周的底稿文件"
    exit 1
fi

echo ""
echo "📂 底稿: $BASE"
echo "📂 排课: $SCHED"
echo "📂 WPS:  $WPS"
echo "🎯 第${WEEK}周"
echo ""

python3 auto_weekly.py "$BASE" "$SCHED" "$WPS" "$WEEK" "$RENEW"

# 如果文件生成了，打开它
OUT="数学组数据统计表-宣城二校6月第${WEEK}周.xls"
if [ -f "$OUT" ]; then
    echo ""
    read -p "按回车打开生成的文件..." 
    open "$OUT"
else
    echo ""
    echo "按任意键退出..."
    read -n 1
fi
