import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Badge } from "@/components/ui/badge";

const CODE_BLOCK_HEIGHT_THRESHOLD = 500;

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const codeRef = React.useRef<HTMLDivElement | null>(null);

  const [isCopied, setIsCopied] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);
  const [codeBlockHeight, setCodeBlockHeight] = React.useState(0);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  React.useLayoutEffect(() => {
    if (codeRef.current) {
      const height = codeRef.current.offsetHeight;
      setCodeBlockHeight(height);
      setExpanded(false);
    }
  }, []);

  return (
    <>
      <div
        ref={codeRef}
        className={`relative ${
          expanded || codeBlockHeight <= CODE_BLOCK_HEIGHT_THRESHOLD
            ? ""
            : "code-block"
        }`}
      >
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
      {codeBlockHeight > CODE_BLOCK_HEIGHT_THRESHOLD && (
        <div
          onClick={() => setExpanded(!expanded)}
          className={`${
            expanded ? "mt-7" : "mt-3"
          } m-auto w-32 h-9 rounded-lg bg-[#f97516] shadow flex items-center justify-center cursor-pointer transition hover:bg-[#d66513] active:bg-[#e36b14]`}
        >
          <p className="text-white text-sm font-semibold">
            Show {expanded ? "less" : "more"}
          </p>
        </div>
      )}
    </>
  );
};

export default CodeBlock;
