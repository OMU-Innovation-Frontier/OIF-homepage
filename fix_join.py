import re

with open(r'C:/Users/ydi10/Downloads/OIF page/app/join/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the garbled description
content = re.sub(
    r'description: "OMU Innovation Frontier \(OIF\) [^"]+",',
    'description: "OMU Innovation Frontier (OIF) への加入方法。AIやITに興味のある学生を募集しています。初心者大歓迎です。",',
    content
)

with open(r'C:/Users/ydi10/Downloads/OIF page/app/join/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('done')
