import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Badge } from "@/components/ui/badge";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Highlight theme={themes.github} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className="overflow-auto">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <div
                  className={
                    i === 0 ? "mt-2" : i === tokens.length - 1 ? "mb-2" : ""
                  }
                >
                  <span className="mr-5">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <Badge
        onClick={copyCode}
        className="!absolute top-5 right-5 select-none cursor-pointer"
      >
        {isCopied ? "Copied" : "Copy code"}
      </Badge>
    </div>
  );
};

export default CodeBlock;
