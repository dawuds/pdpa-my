import json
import os

base_path = 'pdpa-my/provisions/index.json'
new_path = 'pdpa-my/provisions/new_sections.json'

with open(base_path, 'r') as f:
    provisions = json.load(f)

with open(new_path, 'r') as f:
    new_provisions = json.load(f)

# Insert s12A, s12B after s12
s12_idx = next(i for i, p in enumerate(provisions) if p['id'] == 's12')
provisions.insert(s12_idx + 1, new_provisions[1]) # s12B
provisions.insert(s12_idx + 1, new_provisions[0]) # s12A

# Insert s43A after s43
s43_idx = next(i for i, p in enumerate(provisions) if p['id'] == 's43')
provisions.insert(s43_idx + 1, new_provisions[2]) # s43A

# Penalty Updates: Section 5(3) contravention of principles
# From Act A1727 s4: (b)(ii) "one million ringgit"
for p in provisions:
    if p['id'] == 's5' or p['sectionNumber'] == 5:
        if 'one million ringgit' not in p['verbatim']:
            p['verbatim'] = p['verbatim'].replace('three hundred thousand ringgit', 'one million ringgit')
            p['verbatim'] = p['verbatim'].replace('two years', 'three years')
            p['translation'] = p['translation'].replace('RM300,000', 'RM1,000,000')

    # Section 128 (General offences) -> Act A1727 s24: "one million ringgit"
    if p['id'] == 's128' or p['sectionNumber'] == 128:
         p['verbatim'] = p['verbatim'].replace('five hundred thousand ringgit', 'one million ringgit')
         p['translation'] = p['translation'].replace('RM500,000', 'RM1,000,000')

    # Section 129 (Offences in relation to personal data) -> Act A1727 s25: "one million ringgit"
    if p['id'] == 's129' or p['sectionNumber'] == 129:
         p['verbatim'] = p['verbatim'].replace('five hundred thousand ringgit', 'one million ringgit')
         p['translation'] = p['translation'].replace('RM500,000', 'RM1,000,000')

with open(base_path, 'w') as f:
    json.dump(provisions, f, indent=2)

print("Statutory base updated with new sections and penalty caps.")
